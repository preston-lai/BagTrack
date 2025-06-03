type StatsBarProps = {
  totalInvested: number;
  totalPL: number;
  totalPLPercent: number;
  portfolioValue: number;
};

export default function StatsBar({ totalInvested, totalPL, totalPLPercent, portfolioValue }: StatsBarProps) {
  const totalReturn = totalInvested + totalPL;

  return (
    <div className="w-full flex items-center gap-8 px-8 py-4 border-b bg-muted text-foreground text-lg font-medium">
      <div>
        Total Invested: <span className="font-semibold">${totalInvested}</span>
      </div>
      <div>
        Total Return: <span className={totalReturn >= totalInvested ? 'text-green-600' : 'text-red-600'}>
          ${totalReturn}
        </span>
      </div>
      <div>
        Total P/L: <span className={totalPL >= 0 ? 'text-green-600' : 'text-red-600'}>
          {totalPL >= 0 ? '+' : ''}${totalPL} ({totalPLPercent >= 0 ? '+' : ''}{totalPLPercent}%)
        </span>
      </div>
      <div>
        Portfolio Value: <span className="font-semibold">${portfolioValue}</span>
      </div>
    </div>
  );
} 