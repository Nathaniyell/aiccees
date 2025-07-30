import * as React from "react"
import { cn } from "@/lib/utils"

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string
  title?: string
  loading?: "lazy" | "eager"
  allowFullScreen?: boolean
  allow?: string
  sandbox?: string
  className?: string
  height?: string | number
  width?: string | number
}

const Iframe = React.forwardRef<HTMLIFrameElement, IframeProps>(
  ({ 
    className, 
    src, 
    title = "Embedded content",
    loading = "lazy",
    allowFullScreen = true,
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    sandbox = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox",
    height = "600",
    width = "100%",
    ...props 
  }, ref) => {
    // Ensure the src is a valid Google Form URL
    const isGoogleForm = src.includes('docs.google.com/forms') || src.includes('forms.google.com')
    
    // Transform Google Form URL to embed format if needed
    const getEmbedUrl = (url: string) => {
      if (isGoogleForm && !url.includes('/embeddedform')) {
        // Convert Google Form URL to embed format
        return url.replace('/viewform', '/embeddedform')
      }
      return url
    }

    const embedSrc = getEmbedUrl(src)

    return (
      <div className={cn("w-full", className)}>
        <iframe
          ref={ref}
          src={embedSrc}
          title={title}
          loading={loading}
          allowFullScreen={allowFullScreen}
          allow={allow}
          sandbox={sandbox}
          height={height}
          width={width}
          className={cn(
            "w-full border-0 rounded-lg shadow-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            "transition-all duration-200 ease-in-out",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Iframe.displayName = "Iframe"

// Google Form specific component
interface GoogleFormProps extends Omit<IframeProps, 'src'> {
  formUrl: string
  height?: string | number
  showTitle?: boolean
  title?: string
}

const GoogleForm = React.forwardRef<HTMLIFrameElement, GoogleFormProps>(
  ({ 
    formUrl, 
    height = "600", 
    showTitle = false,
    title,
    className,
    ...props 
  }, ref) => {
    return (
      <div className={cn("w-full space-y-4", className)}>
        {showTitle && title && (
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
        )}
        <Iframe
          ref={ref}
          src={formUrl}
          title={title || "Google Form"}
          height={height}
          className="min-h-[400px]"
          {...props}
        />
      </div>
    )
  }
)

GoogleForm.displayName = "GoogleForm"

export { Iframe, GoogleForm } 