import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface SpeakerCardProps {
  speaker: {
    name: string;
    picture: string;
    description1?: string;
    description2?: string;
    description?: string;
    linkedin?: string;
    topics?: string[];
  };
  year: string;
  index: number;
  isExpanded: boolean;
  onToggleExpanded: (speakerId: string) => void;
}

const SpeakerCard = ({ speaker, year, index, isExpanded, onToggleExpanded }: SpeakerCardProps) => {
  const speakerId = `${year}-${index}`;
  const colorScheme = year === '2025' ? 'green' : year === '2024' ? 'red' : 'emerald';
  
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const hasLongDescription = (speaker.description1?.length || 0) > 200 || (speaker.description?.length || 0) > 200;
  
  return (
    <Card className="hover:shadow-md transition-all duration-300 border border-gray-200 mb-8 w-fit">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Speaker Image */}
          <div className="flex-shrink-0 self-center lg:self-start">
            <div className="w-48 h-48 rounded overflow-hidden bg-gray-100">
              <Image
                src={speaker.picture}
                alt={speaker.name}
                className="w-full h-auto object-cover"
                fill
              />
            </div>
          </div>

          {/* Speaker Content */}
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-2xl text-center lg:text-left font-bold text-gray-900">{speaker.name}</h3>
              <Badge 
                variant="secondary" 
                className={`bg-${colorScheme}-100 text-${colorScheme}-700`}
              >
                Keynote Speaker {year}
              </Badge>
            </div>

            {/* Description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-gray-600 leading-relaxed">
                {isExpanded 
                  ? speaker.description1 || speaker.description
                  : truncateText(speaker.description1 || speaker.description || '')
                }
              </p>
              
              {speaker.description2 && isExpanded && (
                <p className="text-gray-600 leading-relaxed">
                  {speaker.description2}
                </p>
              )}

              {/* Topics for speakers */}
              {speaker.topics && (
                <div className="flex flex-wrap gap-2">
                  {speaker.topics.map((topic: string, topicIndex: number) => (
                    <Badge key={topicIndex} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Read More/Less Button */}
              {hasLongDescription && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onToggleExpanded(speakerId)}
                  className={`text-${colorScheme}-600 hover:text-${colorScheme}-700 hover:bg-${colorScheme}-50`}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Read More
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* LinkedIn Button */}
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className={`border-${colorScheme}-600 text-${colorScheme}-600 hover:bg-${colorScheme}-600 hover:text-white`}
              >
                <a
                  href={speaker.linkedin || `https://linkedin.com/in/${speaker.name.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
