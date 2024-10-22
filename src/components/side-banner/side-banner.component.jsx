import './side-banner.styles.scss'

const SideBanner = ({ bannerData }) => {
    const { title, imageUrl } = bannerData
    
    return (
        <div className="col-lg-6">
            <div className="right-first-image">
                <div className="thumb">

                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>

                    <img src={imageUrl} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default SideBanner