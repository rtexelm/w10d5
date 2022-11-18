import {useParams} from "react-router-dom";

const GalleryView = (props) => {
  const {galleryId} = useParams();
  const {galleries} = props;
  console.log(galleries)
  // console.log(galleryId.id)
  console.log(galleries.find(gallery => gallery.id === galleryId));
  return (
    <h1>Hello from GalleryView</h1>
    
  )
}

export default GalleryView