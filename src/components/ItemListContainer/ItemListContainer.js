import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const stock = [
    {
      id: 1,
      name: "Fender Player Stratocastor HSS",
      brand: "Fender",
      fantasyColor: "Polar White",
      color: "white",
      type: "Electric Guitar",
      category: "guitar",
      price: 879.99,
      inStock: true,
      isTopSeller: true,
      orientation: "Right",
      neckWood: "Maple",
      fretNumber: 22,
      strings: 6,
      pickups: {
        config: "HSS",
        neck: "Player Series Stratocaster single coil",
        middle: "Player Series Stratocaster single coil",
        bridge: "Player Series Stratocaster humbucker"
      },
      rating: 5,
      isOnSale: false,
      images:"https://muzikercdn.com/uploads/products/789/78991/main_9a486311.jpg", 
      desc: "Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. This Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a bridge position humbucker and Floyd Rose double-locking tremolo system for a little more rock-and-roll attitude. With a solid alder body, a 22-fret maple fingerboard with a contemporary 9.5' radius for easy bending and the dive-bombing madness of a Floyd Rose, this Player Series Stratocaster HSS is primed and ready to carry you along your musical voyage.",
      "countryOrigin": "Mexico"
    },
    {
      id: 2,
      name: "Squier Bullet Stratocaster",
      brand: "Fender Squier",
      fantasyColor: "Lake Placid Blue",
      color: "blue",
      type: "Electric Guitar",
      category: "guitar",
      price: 179.99,
      inStock: true,
      isTopSeller: true,
      orientation: "Right",
      neckWood: "Maple",
      fretNumber: 21,
      strings: 6,
      pickups: {
        config: "SSS",
        neck: "Proprietary Single Coil",
        middle: "Proprietary Single Coil",
        bridge: "Proprietary Single Coil"
      },
      rating: 4,
      isOnSale: true,
      images: "https://muzikercdn.com/uploads/products/2863/286399/main_6343f6f3.jpg",
      desc: "A great guitar for first-time and early beginning players who want classic tones in an easy-to-play electric guitar that's incredibly affordable. From the comfortable, slim, C-profile neck to the trio of Strat single-coil pickups, the Bullet Strat delivers that iconic Fender sound. The hardtail bridge delivers excellent sustain and, along with the die-cast tuning machines, seriously stable tuning. Case sold separately.",
      "countryOrigin": "Indonesia"
    },
    {
      id: 3,
      name: "Ibanez AZ2402",
      brand: "Ibanez",
      fantasyColor: "Pearl White Flat",
      color: "white",
      type: "Electric Guitar",
      category: "guitar",
      price: 1999.99,
      inStock: true,
      isTopSeller: false,
      orientation: "Right",
      neckWood: "Roasted Maple",
      fretNumber: 24,
      strings: 6,
      pickups: {
        config: "HH",
        neck: "Humbucker",
        middle: "",
        bridge: "Humbucker"
      },
      rating: 5,
      isOnSale: true,
      images:
        "https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg",
      desc: "The AZ series carries with it all of the hallmarks of these tried and tested Ibanez qualities: the smooth oval neck profile, the well balanced asymmetrical body shape, and the neck heel allowing unrivaled playability an upper fret access. It also features a new tremolo bridge, as well as newly developed Hyperion pickups, produced in collaboration with Seymour Duncan. All of these elements help the AZ push the existing boundaries of playability and sound to the next level for modern cutting-edge players, while also providing a touch of classic styling.",
      "countryOrigin": "Japan"
    },
    {
      id: 4,
      name: "Yamaha Pacifica 112VM",
      brand: "Yamaha",
      fantasyColor: "Natural Satin",
      color: "natural",
      type: "Electric Guitar",
      category: "guitar",
      price: 319.99,
      inStock: true,
      isTopSeller: false,
      orientation: "Left",
      neckWood: "Maple",
      fretNumber: 22,
      strings: 6,
      pickups: {
        config: "HSS",
        neck: "Proprietary Alnico Single Coil",
        middle: "Proprietary Alnico Single Coil",
        bridge: "Proprietary Alnico Humbucker"
      },
      rating: 5,
      isOnSale: false,
      images:"https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg",
      desc: "The Yamaha Pacifica 112VM guitar combines renowned Yamaha build quality and playability with superb tone, and is available in four fashionable colors—including the Gray and Ice Blue finishes. The combination of a humbucking bridge pickup and two single-coil pickups provides a wide range of tonal possibilities, while the Alnico V pickups deliver warmth, clarity, and dynamic responsiveness. An alder body, a bolt-on maple neck with maple fretboard, a push-pull coil-split switch for additional tonal options, and a vintage-style tremolo bridge with heavy block saddles complement this beautiful and versatile instrument.",
      "countryOrigin": "Indonesia"
    },
    {
      id: 5,
      name: "Gibson Custom Historic '57 Les Paul Goldtop",
      brand: "Gibson",
      fantasyColor: "Gold Top",
      color: "gold",
      type: "Electric Guitar",
      category: "guitar",
      price: 4699.99,
      inStock: false,
      isTopSeller: false,
      orientation: "Right",
      neckWood: "Mahogany",
      fretNumber: 22,
      strings: 6,
      pickups: {
        config: "HH",
        neck: "CustomBucker",
        middle: "",
        bridge: "CustomBucker"
      },
      rating: 5,
      isOnSale: false,
      images: "https://muzikercdn.com/uploads/products/2860/286000/main_8ad59f97.jpg",
      desc: "This 2018 Historic Series recreations exemplifies Gibson Custom Shop's tireless quest for exacting accuracy to the original year of production, from the woods to the construction to the parts and precise contours throughout. Two new updates for 2018 include the inclusion of all True-Historic-spec parts and, for the first time, narrow/tall frets which bring the tone and playability closer to the character of the originals. Includes hardshell case.",
      "countryOrigin": "USA"
    },
    {
      id: 6,
      name: "Fender American Performer Telecaster RW",
      brand: "Fender",
      fantasyColor: "Aubergine",
      color: "red",
      type: "Electric Guitar",
      category: "guitar",
      price: 1249.99,
      inStock: true,
      isTopSeller: false,
      orientation: "Right",
      neckWood: "Maple",
      fretNumber: 22,
      strings: 6,
      pickups: {
        config: "HS",
        neck: "DoubleTap humbucker",
        middle: "",
        bridge: "Yosemite single-coil"
      },
      rating: 5,
      isOnSale: false,
      images:"https://muzikercdn.com/uploads/products/958/95853/main_d33cb12f.jpg",
      desc: "With the American Performer Series, Fender brings players a line of affordable U.S.-made instruments loaded with stunning finishes, refined electronics and hardware and a few hidden surprises. These guitars and basses are designed for musicians of any level who seek Made in USA quality and playability at a surprisingly accessible price. The American Performer Telecaster HS with rosewood fingerboard takes the quintessential 'workhorse' guitar to a whole new level.",
      "countryOrigin": "USA"
    },
]

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 3000)
        } )
    }
const ItemListContainer = ()=> {
    
    const [productos, setProductos] = useState([])
    
    
    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
            })
    }, [])
        
            return (
            <div className="container my-5 ">
                {productos.map ((prod) =>{
                return(
                <div key={prod.id} >
                <Card bg="dark" text="light" border= "success"  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.images} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    {prod.desc}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>price: ${prod.price}</ListGroup.Item>
                    <ListGroup.Item>rating {prod.rating} points</ListGroup.Item>
                </ListGroup>
                </Card.Body>
                </Card>
                </div>
                )
                })}

            </div>
        )
        
        }
        export default ItemListContainer
        

        
