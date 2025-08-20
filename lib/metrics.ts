export function getCtaAttrs(section: string, kind: string) {
  return {
    "data-event": kind,
    "data-section": section
  } as any;
}