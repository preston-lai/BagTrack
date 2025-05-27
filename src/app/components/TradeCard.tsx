type Trade = {
  token: string;
  usdc: number;
  count: string;
  price: number;
  marketCap: string;
  date: string;
  exitPrice?: number;
  exitDate?: string;
  pl?: string;
};

type TradeCardProps = {
  trade: Trade;
  type: 'in-progress' | 'exited';
};

export default function TradeCard({ trade, type }: TradeCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow flex flex-col gap-2">
      <div className="flex items-center gap-2 text-lg font-bold">
        {trade.token}
        <span className="text-xs font-normal text-muted-foreground ml-2">({type === 'in-progress' ? 'In Progress' : 'Exited'})</span>
      </div>
      <div className="text-sm">Amount Purchased: <span className="font-semibold">${trade.usdc}</span></div>
      <div className="text-sm">Token Count: <span className="font-semibold">{trade.count}</span></div>
      <div className="text-sm">Price Entered At: <span className="font-semibold">${trade.price}</span></div>
      <div className="text-sm">Market Cap at Entry: <span className="font-semibold">{trade.marketCap}</span></div>
      <div className="text-sm">Date of Trade: <span className="font-semibold">{trade.date}</span></div>
      {type === 'exited' && (
        <>
          <div className="text-sm">Exit Price: <span className="font-semibold">${trade.exitPrice}</span></div>
          <div className="text-sm">Exit Date: <span className="font-semibold">{trade.exitDate}</span></div>
          <div className="text-sm">P/L: <span className={trade.pl?.startsWith('+') ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>{trade.pl}</span></div>
        </>
      )}
      {type === 'in-progress' && (
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition w-fit">Exit Trade</button>
      )}
    </div>
  );
} 