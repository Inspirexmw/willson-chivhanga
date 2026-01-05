import { Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SocialShare({ title, url }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-stone-500 mr-2">Share:</span>
      
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hover:bg-stone-100 hover:text-[#1DA1F2]"
        onClick={() => window.open(shareLinks.twitter, '_blank', 'width=550,height=420')}
      >
        <Twitter className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hover:bg-stone-100 hover:text-[#0A66C2]"
        onClick={() => window.open(shareLinks.linkedin, '_blank', 'width=550,height=420')}
      >
        <Linkedin className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hover:bg-stone-100 hover:text-[#1877F2]"
        onClick={() => window.open(shareLinks.facebook, '_blank', 'width=550,height=420')}
      >
        <Facebook className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hover:bg-stone-100"
        onClick={copyToClipboard}
      >
        <LinkIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}