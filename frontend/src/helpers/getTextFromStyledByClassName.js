export function getTextFromStyledByClassName(wrapper, className) {
  return wrapper
    .find(`.${className}`)
    .children()
    .text();
}
