import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/city/$country/$province/$city/$period')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/city/$country/$province/$city/$period"!</div>
}
