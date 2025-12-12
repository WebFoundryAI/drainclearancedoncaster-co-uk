import { useState, useEffect } from "react";
import { getStaticContent } from "@/config/staticContent";
import { buildContentKey } from "@/lib/contentGenerator";
import { AITemplateName } from "@/config/aiPrompts";

interface UseAIContentResult {
  content: string;
  isLoading: boolean;
  error: string | null;
  isCached: boolean;
}

/**
 * Hook to get AI content from static pre-generated content.
 * No runtime API calls - content is inlined at build time.
 */
export function useAIContent(
  type: string,
  _templateName: AITemplateName,
  _variables: Record<string, string>,
  keyParts: string[] = []
): UseAIContentResult {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const key = buildContentKey(type, ...keyParts);

  useEffect(() => {
    // Immediate lookup from static content - no API call
    const staticContent = getStaticContent(key);
    
    if (staticContent) {
      setContent(staticContent);
    } else {
      // Content not found in static file - this is expected for 
      // service-in-location pages that haven't been pre-generated yet
      console.warn(`Static content not found for key: ${key}`);
      setContent("");
    }
    
    setIsLoading(false);
  }, [key]);

  return { content, isLoading, error: null, isCached: true };
}
