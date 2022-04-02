import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import FlatComponent from '../../Component';

export default function Home(){

    const data=[
        {key:'0', categoria: 'Ação, Fantasia', titulo:'Vingadores: Ultimato', image: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg', duracao: '2:20h', sinopse:'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.'},
        {key:'1', categoria: 'Ação, Fantasia', titulo:'Homem-aranha 3', image: 'https://cdn.europosters.eu/image/1300/posters/spider-man-3-hacerse-cargo-de-i6679.jpg', duracao: '2:20h', sinopse:'O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter - apesar de aumentar seus poderes, ela revela e amplia o lado obscuro de sua personalidade. Com isso, os vilões Venom e Homem-Areia tentam destruir o herói.'},
        {key:'2', categoria: 'Ação, Fantasia', titulo:'Homem-aranha 2', image: 'https://upload.wikimedia.org/wikipedia/pt/1/1a/Spider-Man_2.jpg', duracao: '2:20h', sinopse:'Quando uma falha na experiência de fusão nuclear resulta em uma explosão que mata sua esposa, o Dr. Otto Octavius é transformado em Dr. Octopus, um ciborgue com tentáculos de metal. Doc Ock culpa o Homem-Aranha pelo acidente e quer vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.'},
        {key:'3', categoria: 'Ação, Terror', titulo:'Olhos Famintos', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Jeepers_Creepers_capa.jpg/225px-Jeepers_Creepers_capa.jpg', duracao: '2:20h', sinopse:'Ao voltarem para casa por uma estrada sem movimento, os irmãos Trish e Darry veem um vulto atirando o que parece ser um corpo embrulhado. Parando para investigar, eles descobrem centenas de corpos mutilados, pendurados embaixo de uma antiga igreja.'},
        {key:'4', categoria: 'Ação, Tiro', titulo:'Tropa de Elite', image: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg', duracao: '2:20h', sinopse:'Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.'},
        {key:'5', categoria: 'Ação, Ficção Ciêntifica', titulo:'Eu sou a lenda', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/df/I_am_legend_teaser.jpg/230px-I_am_legend_teaser.jpg', duracao: '2:20h', sinopse:'Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.'},
        {key:'6', categoria: 'Comédia, Drama', titulo:'As vantagens de Ser Invisivel', image: 'https://images-na.ssl-images-amazon.com/images/I/81mbcHKS84L.jpg', duracao: '2:20h', sinopse:'Um jovem tímido se esconde em seu próprio mundo até conhecer dois irmãos que o ajudam a viver novas experiências. Embora esteja feliz nessa nova fase, ele não esquece as tristezas do passado, que têm origem em uma chocante revelação.'},
        {key:'7', categoria: 'Animação, Fantasia', titulo:'Formiguinha Z', image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd82baf735ca2a19d2b9bfd6e98248646df56239fa5789c1508564b7a2c7d3a9._RI_V_TTW_.jpg', duracao: '2:20h', sinopse:'Z é uma formiga operária que tenta conciliar sua individualidade com a ética do trabalho comunitário do formigueiro. Ele conhece e se apaixona pela princesa Bala, a herdeira do formigueiro, e arma um plano para reencontrá-la. Porém o maligno General Mandíbula ameaça exterminar toda a população trabalhadora e cabe a Z salvar a colônia de formigas das conspirações traiçoeiras de Mandíbula.'},

    ]

    return(
            <View style={styles.container}>
      <SwiperFlatList index={1} showPagination data={data} renderItem={({item}) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <FlatComponent data={item}/>
        </View>
      )}/>
    </View>
            
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        margin: 20
    }
})