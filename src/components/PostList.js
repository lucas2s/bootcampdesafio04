import React, { Component } from 'react';
import PostItem from './PostIten'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/images/avatar.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/avatar1.png"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Calos Alberto",
          avatar: "http://localhost:8080/images/avatar2.png"
        },
        date: "04 Jun 2019",
        content: "Alguém conhece um desenvolvedor de jogos?",
        comments: [
          {
            id: 1,
            author: {
              name: "JigSaw",
              avatar: "http://localhost:8080/images/avatar4.png"
            },
            content: "Do want a play a game? Eu gosto de deselvolver muitos jogos. Já tive vários clientes que morreram de tanto jogar os meus jogos."
          },
          {
            id: 2,
            author: {
              name: "Batman",
              avatar: "http://localhost:8080/images/avatar6.png"
            },
            content: "Você que é o tal do coringa???"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Lobatinho",
          avatar: "http://localhost:8080/images/avatar3.png"
        },
        date: "10 out 2019",
        content: "Estou procurando uma namorada para que eu possa viver uma lindos momentos de amor. Escreverei varias histórias sobre a nossa vida, e motivaremos as pessoas e vivé-lás também.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clarice",
              avatar: "http://localhost:8080/images/avatar5.png"
            },
            content: "Nossa, esotu tão empolgada, sou tão romântica. Namora comigo, namora comigo, estou desesperada."
          },
          {
            id: 2,
            author: {
              name: "Batman",
              avatar: "http://localhost:8080/images/avatar6.png"
            },
            content: "Serve um namorado?"
          },
          {
            id: 3,
            author: {
              name: "Robin",
              avatar: "http://localhost:8080/images/avatar7.png"
            },
            content: "Eu sabia que você ia me trair Batman. :("
          },
          {
            id: 4,
            author: {
              name: "Bernadete",
              avatar: "http://localhost:8080/images/avatar8.png"
            },
            content: "Ele já é meu, tira o olho suas mocreias."
          }
        ]
      },
    ]
  }

  render () {
    return (
      <div className="posts">
        {
          this.state.posts.map(post => <PostItem key={post.id} data={post} />)
        } 
      </div>
    );
  }
}

export default PostList;