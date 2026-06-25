'use client';

import { useState } from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import { salaryPayoutsApi } from '@/lib/api';
import toast from 'react-hot-toast';

interface PaySalaryModalProps {
  userId: string;
  userName: string;
  payoutUpiVpa?: string | null;
  onClose: () => void;
  onSuccess: () => void;
}

// Record-only: gym admin transfers the amount manually via their own UPI/bank
// app to the trainer/staff's VPA, then logs it here for payout history. No
// gateway, no automated bank movement.
export function PaySalaryModal({ userId, userName, payoutUpiVpa, onClose, onSuccess }: PaySalaryModalProps) {
  const [amount, setAmount] = useState('');
  const [periodLabel, setPeriodLabel] = useState(() => new Date().toLocaleString('en-IN', { month: 'long', year: 'numeric' }));
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const save = async () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) { toast.error('Enter a valid amount'); return; }
    if (!periodLabel.trim()) { toast.error('Enter a pay period'); return; }
    setSaving(true);
    try {
      await salaryPayoutsApi.create({ userId, amount: amt, periodLabel: periodLabel.trim(), notes: notes.trim() || undefined });
      toast.success('Payout recorded — transfer the amount, then mark it Paid once sent');
      onSuccess();
      onClose();
    } catch (e: any) {
      toast.error(e.response?.data?.message ?? 'Failed to record payout');
    }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-card border border-border rounded-3xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto animate-pop">
        <div className="gradient-brand p-5 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
          <div className="relative flex items-center justify-between">
            <h2 className="font-extrabold text-xl text-white">Pay Salary</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-white/70 relative">{userName}</p>
        </div>

        <div className="p-6 space-y-4">
          {payoutUpiVpa ? (
            <div className="bg-muted/50 rounded-xl p-3 text-sm">
              <span className="text-muted-foreground">Pay to UPI:</span> <span className="font-bold">{payoutUpiVpa}</span>
            </div>
          ) : (
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-400">
              No UPI ID on file for this person yet — transfer via whatever method you normally use, this just logs the amount.
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Amount (₹) *</label>
            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-muted/50 border border-border/60 rounded-xl outline-none focus:border-primary/40 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Pay Period *</label>
            <input value={periodLabel} onChange={e => setPeriodLabel(e.target.value)}
              placeholder="e.g. June 2026" className="w-full px-3 py-2.5 text-sm bg-muted/50 border border-border/60 rounded-xl outline-none focus:border-primary/40 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2}
              placeholder="Optional" className="w-full px-3 py-2.5 text-sm bg-muted/50 border border-border/60 rounded-xl outline-none focus:border-primary/40 resize-none transition-all" />
          </div>
        </div>

        <div className="flex gap-3 p-5 border-t border-border">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-border hover:bg-muted text-sm font-medium">Cancel</button>
          <button onClick={save} disabled={saving} className="flex-[2] py-2.5 rounded-xl gradient-brand text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : 'Record Payout'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaySalaryModal;
