const getCroppedImage = (url: string) => {
  const target = "media/";
  const mediaIndex = url.indexOf(target) + target.length;
  return `${url.slice(0, mediaIndex)}crop/600/400/${url.slice(mediaIndex)}`
  // return url.slice(0, mediaIndex) +  "crop/600/400/" + url.slice(mediaIndex);
}

export default getCroppedImage;