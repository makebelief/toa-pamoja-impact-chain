import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Bitcoin, DollarSign, Smartphone, Coins } from "lucide-react";
import { useState } from "react";

interface DonationModalProps {
  campaign: {
    id: number;
    title: string;
    goal: number;
    raised: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ campaign, isOpen, onClose }: DonationModalProps) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [processing, setProcessing] = useState(false);

  if (!isOpen) return null;

  const handleDonate = async () => {
    setProcessing(true);
    // Simulate donation processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    alert(`Thank you! Your ${amount} ${currency} donation to "${campaign.title}" has been processed.`);
    onClose();
  };

  const currencies = [
    { code: "USD", name: "US Dollar", icon: DollarSign },
    { code: "XLM", name: "Stellar Lumens", icon: Coins },
    { code: "BTC", name: "Bitcoin", icon: Bitcoin },
    { code: "MPESA", name: "M-Pesa", icon: Smartphone },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Donate to {campaign.title}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="amount">Donation Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <Label>Currency</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {currencies.map((curr) => (
                <Button
                  key={curr.code}
                  variant={currency === curr.code ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrency(curr.code)}
                  className="flex items-center space-x-2"
                >
                  <curr.icon className="w-4 h-4" />
                  <span>{curr.code}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              Your donation goes directly to the community. You'll receive real updates 
              showing exactly how your contribution creates impact.
            </p>
          </div>

          <Button 
            onClick={handleDonate} 
            disabled={!amount || processing}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {processing ? "Processing..." : `Donate ${amount} ${currency}`}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationModal;
