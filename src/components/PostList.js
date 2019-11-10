import React, { Component } from 'react';
import PostItem from './PostIten'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bino",
          avatar: "http://localhost:8080/images/bino.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a cilada.com está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Cilada",
              avatar: "http://localhost:8080/images/avatar1.png"
            },
            content: "Olá Bino. Temos uma ótima oportunidade de Desenvolvedor Ninja. Ótimo sálario e com benefício de vale transporte. É necessários apenas conhecimentos em Java, C, Python, C++, C#, Visual Basic .NET, JavaScript, PHP, SQL, Swift, Ruby, Objective-C, Delphi/Object Pascal, Groovy, Assembly language, R, Visual Basic, D, MATLAB, Go, Clipper, Mercury, Monkey, MQL4, NATURAL, OpenCL, Perl, COBOL."
          },
          {
            id: 2,
            author: {
              name: "Pedro",
              avatar: "http://localhost:8080/images/pedro.png"
            },
            content: "Correeee Bino, isso eh uma cilada..."
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Calos Alberto",
          avatar: "http://localhost:8080/images/avatar2.png"
        },
        date: "06 Jun 2019",
        content: "Alguém conhece um desenvolvedor de jogos?",
        comments: [
          {
            id: 1,
            author: {
              name: "JigSaw",
              avatar: "http://localhost:8080/images/jigsaw.png"
            },
            content: "Do want a play a game? Eu gosto de deselvolver muitos jogos. Já tive vários clientes que morreram de tanto jogar os meus jogos."
          },
          {
            id: 2,
            author: {
              name: "Batman",
              avatar: "http://localhost:8080/images/batman.png"
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
              avatar: "http://localhost:8080/images/batman.png"
            },
            content: "Serve um namorado?"
          },
          {
            id: 3,
            author: {
              name: "Robin",
              avatar: "http://localhost:8080/images/robin.png"
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