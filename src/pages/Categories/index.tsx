import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import Resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Hioki Sushi '
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starwars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Residente Evil 5',
    system: 'Windows',
    infos: ['17/05'],
    image: Resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="salmao" />
    <ProductsList games={emBreve} title="Ação" background="salmao" />
    <ProductsList games={promocoes} title="Aventura" background="salmao" />
    <ProductsList games={emBreve} title="FPS" background="salmao" />
  </>
)

export default Categories
