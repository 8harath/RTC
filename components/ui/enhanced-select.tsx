import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface SelectOption {
  value: string
  label: string
}

interface EnhancedSelectProps {
  options: SelectOption[]
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  disabled?: boolean
}

export function EnhancedSelect({
  options,
  placeholder = "Select an option",
  value,
  onValueChange,
  className,
  disabled = false,
}: EnhancedSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={cn(
        "bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white border-gray-200 shadow-lg max-h-60 overflow-y-auto">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="hover:bg-orange-50 focus:bg-orange-50 text-gray-900 cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
