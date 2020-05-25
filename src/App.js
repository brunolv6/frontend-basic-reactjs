//importei para entender JSX
//useState usa para administrar estados e fazer atualizações localizadas em caso de mudança
import React, { useState, useEffect } from 'react';

import api from './services/api.js'

import universe from './assets/universe.jpg'
import './App.css';

import Header from './components/Header'

//Crie componente
function App() {

    //funcao useState retornará dois argumentos a variável em si e um função para aplicar suas mudanças
    const [ projects, setProjects ] = useState([]);

    
    useEffect(()=>{
        api.get('/projects').then(response => {
            console.log(response.data);
            setProjects(response.data)
        });
    }, []);

    async function handleAddProject () {
        //push não obdece estado de imutabilidade do estado
        //projects.push(`Projeto Novo ${Date.now()}`)
        
        //desta form refarei e não mudarei
        //e quando for modificado seu componente será refeito
        
        // !! IMPORTANTE ABAIXO!!

        // setProjects([...projects, {
        //     id: `Projeto Novo ${Date.now()}`,
        //     title: `Projeto Novo ${Date.now()}`,
        //     owner: 'computer AI'
        // }])

        //console.log(projects)

        //assincorna a funcao mas espera a resposta desta API para continuar a funcao
        const response = await api.post('/projects', {
            title: `Projeto Novo ${Date.now()}`,
            owner: 'computer AI'
        });

        const project = response.data;

        //modifica o estado adicionando um novo projeto que será percebido pelo render e será renderizado novamente o que for necessário
        setProjects([...projects, project])
    }

    return (
        //tenho que ter um pai ao redor do componente
        <>
            <Header title="Projetos">
                {/* map além de mapear, também retorna o código */}
                {projects.map(project => <li key={project.id}>{project.title} do proprietário {project.owner}</li>)}
            </Header>
            <button type='type' onClick={handleAddProject}>Adicionar Projeto</button>
            <h1>Hello New World</h1>
            <Header title="Homepage">

                <img src={universe} alt="universo"/>

                <ul>
                    <li>Entrada</li>
                    <li>Saída</li>
                </ul>
            </Header>
        </>
    );
}

//exportei componente para ser usado em outros lugares
export default App;