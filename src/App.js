import './App.css'
import CardsContainer from './components/CardsContainer'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import PageNavigation from './components/PageNavigation'

function App() {
  const dataset = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg',
      title: 'Mazda MX-5',
      start_production: 1989,
      class: 'Sports car Roadster'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg',
      title: 'Volkswagen Kübelwagen',
      class: 'Military vehicle'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg',
      title: 'Porsche Cayenne',
      start_production: 2002,
      class: 'Mid-size luxury crossover SUV'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG',
      title: 'Vauxhall Chevette',
      start_production: 1975,
      class: 'Supermini'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg',
      title: 'Dymaxion car',
      start_production: 1933,
      class: 'Concept car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg',
      title: 'Ford Crown Victoria',
      start_production: 1955,
      class: 'Full-size Ford'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg',
      title: 'Plymouth Superbird',
      start_production: 1970,
      class: 'Muscle car(today) and Race car(Past)'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg',
      title: 'Saab 9000',
      start_production: 1984,
      class: 'Executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg',
      title: 'Pontiac Sunfire',
      start_production: 1994,
      class: 'Compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG',
      title: 'AMC Javelin',
      start_production: 1967,
      class: '{{Unbulleted list| Pony car | Muscle car },},'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg',
      title: 'Jaguar X-Type',
      start_production: 2001,
      class: 'Compact executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg',
      title: 'Volkswagen Phaeton',
      start_production: 2002,
      class: 'Full-size luxury car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg',
      title: 'Pontiac G6',
      start_production: 2004,
      class: 'Midsize'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG',
      title: 'Ford Five Hundred',
      start_production: 2004,
      class: 'Full-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg',
      title: 'Pontiac Solstice',
      start_production: 2005,
      class: 'Roadster, coupe'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg',
      title: 'Fiat Tipo',
      start_production: 1988,
      class: 'Small family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png',
      title: 'Plymouth Reliant',
      start_production: 1981,
      class: 'Mid-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG',
      title: 'Chevrolet Chevette',
      start_production: 1975,
      class: 'Subcompact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg',
      title: 'SEAT León',
      class: 'Small family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg',
      title: 'Chevrolet Corsica',
      start_production: 1987,
      class: 'Compact car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg',
      title: 'Mazda MX-3',
      start_production: 1991,
      class: 'Sport compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg',
      title: 'TVR Tuscan Speed Six',
      start_production: 1999,
      class: 'Sports car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aston_Martin_DB9_coupe_02.jpg/400px-Aston_Martin_DB9_coupe_02.jpg',
      title: 'Aston Martin DB9',
      start_production: 2004,
      class: 'Grand tourer'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pontiac_Catalina_front.jpg/400px-Pontiac_Catalina_front.jpg',
      title: 'Pontiac Catalina',
      start_production: 1950,
      class: 'Full-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oldsmobile_Toronado_0003.jpg/400px-Oldsmobile_Toronado_0003.jpg',
      title: 'Oldsmobile Toronado',
      start_production: 1965,
      class: 'Full-size personal luxury car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chrysler_Cirrus_--_01-27-2012.jpg/400px-Chrysler_Cirrus_--_01-27-2012.jpg',
      title: 'Chrysler Cirrus',
      start_production: 1994,
      class: 'Mid-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg',
      title: 'Volkswagen Corrado',
      start_production: 1988,
      class: 'Sport compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg/400px-Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg',
      title: 'Mercedes-Benz R-Class',
      class: 'Full-size CUV / Large MPV'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Volvo_V50_1.6_D.jpg/400px-Volvo_V50_1.6_D.jpg',
      title: 'Volvo V50',
      start_production: 2004,
      class: 'Compact / Small family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/400px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg',
      title: 'Audi TT',
      class: 'Sport compact Sports car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg/400px-VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg',
      title: 'Volkswagen Touareg',
      start_production: 2002,
      class: 'Mid-size luxury crossover SUV'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red92VR4rear.jpg/400px-Red92VR4rear.jpg',
      title: 'Mitsubishi GTO',
      start_production: 1990,
      class: 'Sports car, grand tourer'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cadillac_Cimarron_2_--_07-01-2009.jpg/400px-Cadillac_Cimarron_2_--_07-01-2009.jpg',
      title: 'Cadillac Cimarron',
      start_production: 1981,
      class: 'Compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG',
      title: 'Dodge Daytona',
      start_production: 1984,
      class: 'Compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cadillac_Allante.jpg/400px-Cadillac_Allante.jpg',
      title: 'Cadillac Allanté',
      start_production: 1986,
      class: 'Luxury roadster'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Toyota_Avensis_III_20090706_front.JPG/400px-Toyota_Avensis_III_20090706_front.JPG',
      title: 'Toyota Avensis',
      start_production: 1997,
      class: 'Large family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mercedes_300SL_Coupe_vr_silver_EMS.jpg/400px-Mercedes_300SL_Coupe_vr_silver_EMS.jpg',
      title: 'Mercedes-Benz 300 SL',
      start_production: 1952,
      class: 'Sports car, GT'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Audi_80_B1234.jpg/400px-Audi_80_B1234.jpg',
      title: 'Audi 80',
      start_production: 1997,
      class: 'Compact executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audi_A2_front_20071002.jpg/400px-Audi_A2_front_20071002.jpg',
      title: 'Audi A2',
      start_production: 1999,
      class: 'Supermini'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg',
      title: 'Oldsmobile Intrigue',
      class: 'Mid-size car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/91RT_1.jpg/400px-91RT_1.jpg',
      title: 'Dodge Spirit',
      start_production: 1989,
      class: 'Mid-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/%2782-%2784_Pontiac_6000_Coupe.jpg/400px-%2782-%2784_Pontiac_6000_Coupe.jpg',
      title: 'Pontiac 6000',
      start_production: 1982,
      class: 'Mid-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dodge-Shadow-Coupe.jpg/400px-Dodge-Shadow-Coupe.jpg',
      title: 'Dodge Shadow',
      start_production: 1986,
      class: 'Compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oldsmobile_Alero_sedan_--_03-16-2012.JPG/400px-Oldsmobile_Alero_sedan_--_03-16-2012.JPG',
      title: 'Oldsmobile Alero',
      start_production: 1998,
      class: 'Compact car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2006_Chrysler_Crossfire_%28ZH_MY05%29_coupe_%282015-11-11%29_01.jpg/400px-2006_Chrysler_Crossfire_%28ZH_MY05%29_coupe_%282015-11-11%29_01.jpg',
      title: 'Chrysler Crossfire',
      start_production: 2003,
      class: 'Sports car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/1968_AMC_AMX_white_at_Rockville_Maryland_show_2007.jpg/400px-1968_AMC_AMX_white_at_Rockville_Maryland_show_2007.jpg',
      title: 'AMC AMX',
      start_production: 1968,
      class: 'Grand tourer, Muscle car, Sports car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/93_Dodge_Dynasty_%2814344073600%29.jpg/400px-93_Dodge_Dynasty_%2814344073600%29.jpg',
      title: 'Dodge Dynasty',
      start_production: 1988,
      class: 'Mid-size'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Audi_A5_Coup%C3%A9_2.0_TFSI_quattro_S_tronic_Gletscherwei%C3%9F_Facelift.JPG/400px-Audi_A5_Coup%C3%A9_2.0_TFSI_quattro_S_tronic_Gletscherwei%C3%9F_Facelift.JPG',
      title: 'Audi A5',
      start_production: 2007,
      class: 'Compact executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2015_Audi_A4_B9_3.0_TDI_quattro_V6_200_kW_S_line_Tangorot_Vorderansicht_%28cropped%29.jpg/400px-2015_Audi_A4_B9_3.0_TDI_quattro_V6_200_kW_S_line_Tangorot_Vorderansicht_%28cropped%29.jpg',
      title: 'Audi A4',
      class: 'Compact executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cadillac_V-16_Roadster_1930.jpg/400px-Cadillac_V-16_Roadster_1930.jpg',
      title: 'Cadillac V-16',
      start_production: 1930,
      class: 'Luxury car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Fiero88.JPG/400px-Fiero88.JPG',
      title: 'Pontiac Fiero',
      start_production: 1983,
      class: 'Sports car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1990_240sx_Quarter_View.JPG/400px-1990_240sx_Quarter_View.JPG',
      title: 'Nissan 240SX',
      start_production: 1989,
      class: 'Sport compact'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2008_Chrysler_300.jpg/400px-2008_Chrysler_300.jpg',
      title: 'Chrysler 300',
      start_production: 2003,
      class: 'Full-size luxury car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Volvo_C30_RDesign_HRes.jpg/400px-Volvo_C30_RDesign_HRes.jpg',
      title: 'Volvo C30',
      start_production: 2006,
      class: 'Premium compact car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Plymouth_Duster_%28Orange_Julep%29.jpg/400px-Plymouth_Duster_%28Orange_Julep%29.jpg',
      title: 'Plymouth Duster',
      start_production: 1969,
      class: 'Compact car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mazda_Xedos_9.JPG/400px-Mazda_Xedos_9.JPG',
      title: 'Mazda Millenia',
      start_production: 1992,
      class: 'Executive car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fiat_Tempra_SX_%2793.jpg/400px-Fiat_Tempra_SX_%2793.jpg',
      title: 'Fiat Tempra',
      start_production: 1990,
      class: 'Family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Opel_Calibra_front_20071007.jpg/400px-Opel_Calibra_front_20071007.jpg',
      title: 'Opel Calibra',
      start_production: 1989,
      class: 'Coupé'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg/400px-2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg',
      title: 'Peugeot 307',
      start_production: 2001,
      class: 'Small family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2005_Peugeot_407_ST_HDi_Executive_sedan_%282015-07-09%29_01.jpg/400px-2005_Peugeot_407_ST_HDi_Executive_sedan_%282015-07-09%29_01.jpg',
      title: 'Peugeot 407',
      start_production: 2004,
      class: 'Large family car'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Simca_Chrysler_Horizon_GLS_1979.jpg/400px-Simca_Chrysler_Horizon_GLS_1979.jpg',
      title: 'Simca-Talbot Horizon',
      start_production: 1978,
      class: 'Subcompact'
    }
  ]
  const [pageNo, setPageNo] = useState(8)
  const [slicedData, setSlicedData] = useState(
    dataset.slice((pageNo - 1) * 6, pageNo * 6)
  )
  const searchClick = (input) => {
    const filteredArray = dataset.filter((data) => {
      return (
        data.class === input ||
        data.title === input ||
        data.start_production === +input
      )
    })
    console.log(filteredArray)
    setSlicedData(filteredArray)
  }
  useEffect(() => {
    console.log(pageNo)
  }, [pageNo])
  const handleClick = (e) => {
    setPageNo(+e.target.name)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar searchClick={searchClick} />
        <Routes>
          <Route
            exact
            path='/'
            element={<CardsContainer slicedData={slicedData} pageNo={1} />}
          />
          <Route
            exact
            path='1'
            element={<CardsContainer slicedData={slicedData} />}
          />
          <Route
            exact
            path='2'
            element={<CardsContainer slicedData={slicedData} />}
          />
          <Route
            exact
            path='3'
            element={<CardsContainer slicedData={slicedData} />}
          />
        </Routes>
        <PageNavigation
          setPageNo={setPageNo}
          handleClick={handleClick}
          pageNo={pageNo}
        />
      </BrowserRouter>
    </>
  )
}

export default App
