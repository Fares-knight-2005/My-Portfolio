export function getAssetPath(path) {
  // إزالة أي شرطة مائلة من البداية ثم دمج المسار الأساسي
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.replace(/^\//, '');
  return `${base}${cleanPath}`;
}