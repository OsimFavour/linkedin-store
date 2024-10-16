import BANNER_DATA from '../../banner-data.json'
import MainBanner from '../main-banner/main-banner.component'
import SideBanner from '../side-banner/side-banner.component'

const Banner = () => {
  return (
    <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <MainBanner />
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">

                            {BANNER_DATA.map((bannerData) => <SideBanner key={bannerData.id} bannerData={bannerData}/>)}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner