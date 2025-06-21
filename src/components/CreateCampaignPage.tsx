
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface CreateCampaignPageProps {
  onBack: () => void;
}

const CreateCampaignPage = ({ onBack }: CreateCampaignPageProps) => {
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    description: "",
    goal: "",
    location: "",
    category: "",
    image: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Campaign created successfully! It will be reviewed within 24 hours.");
    setIsSubmitting(false);
    onBack();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Button variant="outline" onClick={onBack} className="mb-6">
          ← Back to Home
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create New Campaign</CardTitle>
            <p className="text-gray-600">
              Help us build a better tomorrow by sharing your project with our global community.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Campaign Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., Clean Water for Rural Schools"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    placeholder="Your organization name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="goal">Funding Goal (USD) *</Label>
                  <Input
                    id="goal"
                    type="number"
                    value={formData.goal}
                    onChange={(e) => handleInputChange("goal", e.target.value)}
                    placeholder="50000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="City, Country"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a category</option>
                  <option value="water">Clean Water</option>
                  <option value="education">Education</option>
                  <option value="health">Healthcare</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="environment">Environment</option>
                </select>
              </div>

              <div>
                <Label htmlFor="description">Project Description *</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your project, its impact, and how funds will be used..."
                  className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Project Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/project-image.jpg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload your image to a service like Imgur and paste the URL here
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Verification Process</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• All campaigns are reviewed by our team within 24 hours</li>
                  <li>• We verify organization credentials and project legitimacy</li>
                  <li>• Once approved, your campaign goes live on our platform</li>
                  <li>• All donations are tracked transparently on blockchain</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 py-3"
              >
                {isSubmitting ? "Creating Campaign..." : "Submit for Review"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateCampaignPage;
