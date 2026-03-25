import { createFileRoute } from "@tanstack/react-router";
import { Grid, Text, Section, FlexCol } from "@/components";
import { LocationSearch, LocationCardLink } from "@/features";
import { cn } from "@/utils";
import {
  HOME_LABELS as LABELS,
  homeRouteLoader as routeLoader,
  useHomeForecastQueries as useForecastQueries,
} from "@/routing";

export const Route = createFileRoute("/")({
  loader: routeLoader,
  component: RouteComponent,
});

function RouteComponent() {
  const { currentLocality, recentLocations } = Route.useLoaderData();

  const allLocations = [
    ...(currentLocality ? [currentLocality] : []),
    ...recentLocations,
  ];

  const results = useForecastQueries(allLocations);

  const currentForecast = currentLocality ? results[0] : undefined;
  const recentForecasts = currentLocality ? results.slice(1) : results;

  return (
    <>
      <Section>
        <FlexCol gap={4} className="w-full">
          <div>
            <Text type={{ base: "headline6", sm: "headline5" }}>
              {LABELS.hero.superTitle()}
            </Text>
            <Text type={{ base: "headline3", sm: "headline2" }}>
              <span className="block">{LABELS.hero.primaryTitle}</span>
              <span>{LABELS.hero.secondaryTitle}</span>
            </Text>
          </div>
          <LocationSearch className={cn("xl:max-w-130")} />
        </FlexCol>
      </Section>
      {currentLocality && (
        <Section>
          <Grid gap={4} cols={{ base: 1, lg: 3 }} className="w-full">
            <Grid.Item span={1}>
              <FlexCol gap={1} stretchItems className="w-full">
                <Text type="large" className="font-medium">
                  {LABELS.currentLocation.title}
                </Text>
              </FlexCol>
            </Grid.Item>
          </Grid>
        </Section>
      )}
    </>
  );
}

//         <FlexCol gap={{ base: 4, md: 6 }}>
//           <FlexCol gap={4} className="w-full">
//             <div>
//               <Text type={{ base: "headline6", sm: "headline5" }}>
//                 {LABELS.hero.superTitle()}
//               </Text>
//               <Text type={{ base: "headline3", sm: "headline2" }}>
//                 <span className="block">{LABELS.hero.primaryTitle}</span>
//                 <span>{LABELS.hero.secondaryTitle}</span>
//               </Text>
//             </div>
//             <LocationSearch className={cn("xl:max-w-130")} />
//           </FlexCol>
//           {(currentLocalityCardParams || recentLocationsCardParams) && (
//             <Grid fit gap={4} cols={{ base: 1, lg: 3 }}>
//               {currentLocalityCardParams && (
//                 <Grid.Item span={1}>
//                   <FlexCol fit gap={1} stretchItems>
//                     <Text type="large" className="font-medium">
//                       {LABELS.currentLocation.title}
//                     </Text>
//                     <Button
//                       unstyled
//                       className="hover-3d w-full"
//                       to={formatWeatherUrlPath(
//                         currentLocality?.countryName || "",
//                         currentLocality?.locality || "",
//                         currentLocality?.city || "",
//                         "current",
//                       )}
//                     >
//                       <LocalityCard
//                         city={currentLocalityCardParams.city}
//                         region={currentLocalityCardParams.region}
//                         WmoIcon={currentLocalityCardParams.WmoIcon}
//                         temperature={currentLocalityCardParams.temperature}
//                       />
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                       <div></div>
//                     </Button>
//                   </FlexCol>
//                 </Grid.Item>
//               )}
//               {recentLocationsCardParams.length > 0 && (
//                 <Grid.Item
//                   span={{
//                     base: 1,
//                     lg: recentLocationsCardParams.length === 1 ? 1 : 2,
//                   }}
//                 >
//                   <FlexCol fit gap={1}>
//                     <Text type="large" className="font-medium">
//                       {LABELS.recentLocations.title}
//                     </Text>
//                     <Flex
//                       fit
//                       gap={4}
//                       direction={{ base: "col", md: "row" }}
//                       stretchItems
//                     >
//                       {recentLocationsCardParams.map((params, i) => (
//                         <Button
//                           key={`${params.city}-${i}`}
//                           unstyled
//                           className="hover-3d"
//                           to={formatWeatherUrlPath(
//                             recentLocations[i].country || "",
//                             recentLocations[i].admin1 || "",
//                             recentLocations[i].name || "",
//                             "current",
//                           )}
//                         >
//                           <LocalityCard
//                             city={params.city}
//                             region={params.region}
//                             WmoIcon={params.WmoIcon}
//                             temperature={params.temperature}
//                           />
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                           <div></div>
//                         </Button>
//                       ))}
//                     </Flex>
//                   </FlexCol>
//                 </Grid.Item>
//               )}
//             </Grid>
//           )}
//     </FlexCol>
//   </Section>
// </div>
