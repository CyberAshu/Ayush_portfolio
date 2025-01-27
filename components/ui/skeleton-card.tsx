import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card>
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  )
}

