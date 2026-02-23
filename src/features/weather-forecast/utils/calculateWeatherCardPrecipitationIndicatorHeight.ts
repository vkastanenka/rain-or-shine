export const calculateWeatherCardPrecipitationIndicatorHeight = (
  precipitation: number,
): number => {
  const maxPrecipitationHeight = 50;
  const maxPrecipitationMm = 150;

  let height = 0;

  if (precipitation > 0) {
    const calculated = Math.floor(
      (precipitation / maxPrecipitationMm) * maxPrecipitationHeight,
    );
    height = Math.max(calculated, 1); // Ensure at least 1px if raining
    height = Math.min(height, maxPrecipitationHeight); // Ensure cap at 45px
  }

  return height;
};
