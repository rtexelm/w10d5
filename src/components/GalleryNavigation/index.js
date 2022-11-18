import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation(props) {
    const {galleries} = props;
    const galleryRoutes = galleries.map((gallery) => {
        return <NavLink key={gallery.id} to={`/gallery/${gallery.galleryid}`}>{gallery.name}</NavLink>
    })
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">About</NavLink>  
            {galleryRoutes}
        </nav>
    );
}

export default GalleryNavigation;