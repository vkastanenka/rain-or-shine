import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/weather/$country/$province/$city/$period/$coords')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/weather/$country/$province/$city/$period/$coords"!</div>
}
