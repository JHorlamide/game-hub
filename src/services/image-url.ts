const getCroppedImage = (url: string) => {
  if (!url) return "";
  
  const target = "media/";
  const mediaIndex = url.indexOf(target) + target.length;
  return `${url.slice(0, mediaIndex)}crop/600/400/${url.slice(mediaIndex)}`
}

export default getCroppedImage;