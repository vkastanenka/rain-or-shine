export const animateScroll = (element: HTMLElement, duration: number) => {
  const start = element.scrollTop;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function: easeOutQuad
    const ease = progress * (2 - progress);

    element.scrollTop = start * (1 - ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
