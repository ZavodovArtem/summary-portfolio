import React, {useState} from "react";
import '../Main.scss'
import '../components/styles/Map.scss'



const HoverComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <div className="isHovered + sideLeftTwoMail"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <div className="sideLeftTwoMail"><a className="sideLeftTwoMail" href="https://yandex.ru/maps/-/CDBHvQOC" target="_blank" rel="noreferrer">Nizhny Novgorod</a></div>
                {isHovered && (
                    <div className="isHoveredOpen"><div>
                            <div className="isHoveredOpengroup">
                                <a className="isHoveredOpenAOne" href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps" target="_blank" rel="noreferrer">Нижний Новгород</a>
                                <a className="isHovereOpenATwo" href="https://yandex.ru/maps/geo/nizhniy_novgorod/53105078/?ll=43.833528%2C56.304645&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=11.36" target="_blank" rel="noreferrer">Нижний Новгород — Яндекс Карты</a>
                                <iframe className="isHovereOpenAthree" src="https://yandex.ru/map-widget/v1/?ll=43.833528%2C56.304645&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTA3OBIr0KDQvtGB0YHQuNGPLCDQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCIKDa0GMEIVpE5hQg%2C%2C&source=serp_navig&z=11.36" width="560" height="400" title="Yandex Map" allowFullScreen={true}></iframe>
                            </div>
                            </div> 
                        </div>
                )}
        </div>
    )
}

export default HoverComponent