import { GlobalStyles, ContainerAnotations, ModalAnotation, 
  AddAnotation, ContainerCards, CardAnotation } from './styles/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faXmark, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const App = () => {

  const [openModal, setOpenModal] = useState(false)
  const [anotations, setAnotations] = useState([])
  const [isNoneValue, setIsNoneValue] = useState(false)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('anotations'))
    if (data) {
      setAnotations(data)
    }
  }, [])

  const addAnotation = () => {
    // Objeto para pegar o valor dos campos de título e descrição
    const newAnotation = {
      id: Math.floor(Math.random() * 1000),
      title: titleValue,
      description: descriptionValue
    }
    // Verificação dos campos
    if (!newAnotation.title || !newAnotation.description) {
      return setIsNoneValue(true)
    }
    // Adicionar uma anotação e armazenar no localStorage
    setAnotations([newAnotation, ...anotations])
    localStorage.setItem('anotations', JSON.stringify([newAnotation, ...anotations]))
    setIsNoneValue(false)
    setOpenModal(false)
  }

  const startEdit = (id, title, description) => {
    setOpenModal(true)
    setIsEdit(true)              
    setEditingId(id)
    setNewTitle(title)
    setNewDescription(description)
  }

  const editAnotation = () => {
    setAnotations(anotations.map((anotation) => 
      anotation.id === editingId ? 
      {
        title: newTitle, 
        description: newDescription
      } : anotation))
    localStorage.setItem('anotations', JSON.stringify(
      anotations.map((anotation) => 
      anotation.id === editingId ? 
      {
        title: newTitle, 
        description: newDescription
      } : anotation)
    ))
    setOpenModal(false)
    setIsEdit(false)
  }

  const removeAnotation = (id) => {
    // Função de remover uma anotação e atualizar no localStorage
    setAnotations(anotations.filter((anotation) => anotation.id !== id))
    localStorage.setItem('anotations', JSON.stringify(anotations.filter((anotation) => anotation.id !== id)))
  }

  return (
    <ContainerAnotations>
      <GlobalStyles/>
      <h1>
        <FontAwesomeIcon icon={faClipboard}/> Anotações
      </h1>
      <button onClick={() => {setOpenModal(true); setTitleValue(''); setDescriptionValue('')}}>
        <FontAwesomeIcon icon={faPlus} className='icon-anotation'/> {isEdit ? 'Editar Anotação' : 'Nova Anotação'}
      </button>
      <div className="divider"></div>
      {openModal && <ModalAnotation>
        <button className='btn-close' onClick={() => {setOpenModal(false); setIsNoneValue(false); setIsEdit(false)}}>
          <FontAwesomeIcon icon={faXmark} className='icon-close'/>
        </button>
        <h2>{isEdit ? 'Editar Anotação' : 'Nova Anotação'}</h2>
        <AddAnotation>
          {isNoneValue && <span>Preencha todos os campos!</span>}
          <label htmlFor="title-anotation">Título:</label>
          <textarea rows="1" placeholder='Digite o título da anotação' onChange={isEdit ? (e) => setNewTitle(e.target.value) : (e) => setTitleValue(e.target.value)} value={isEdit ? newTitle : titleValue}/>
          <label htmlFor="description-anotation">Descrição:</label>
          <textarea cols="30" rows="7" placeholder='Digite a anotação...' onChange={isEdit ? (e) => setNewDescription(e.target.value) : (e) => setDescriptionValue(e.target.value)} value={isEdit ? newDescription : descriptionValue}/>
          <button className='btn-add' onClick={isEdit ? editAnotation : addAnotation}>
            {isEdit ? 'Salvar' : 'Adicionar'}
          </button>
        </AddAnotation>
      </ModalAnotation>}
      <ContainerCards>
        {!anotations.length ? 
        <div className='none-anotations'>
          <h2>Sem anotações</h2>
          <p>Nenhuma anotação adicionada...</p>
        </div> : anotations.map((anotation) => (
          <CardAnotation key={anotation.id}>
            <h3>{anotation.title}</h3>
            <p>{anotation.description}</p>
              <div className="btns-card">
                <button onClick={() => startEdit(anotation.id, anotation.title, anotation.description)}>
                  <FontAwesomeIcon icon={faPenToSquare}/>
                </button>
                <button onClick={() => removeAnotation(anotation.id)}>
                  <FontAwesomeIcon icon={faTrash}/>
                </button>
              </div>
          </CardAnotation>))}
      </ContainerCards>
    </ContainerAnotations>
  )
}

export default App
