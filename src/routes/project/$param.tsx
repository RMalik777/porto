import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$param')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/project/$param"!</div>
}
