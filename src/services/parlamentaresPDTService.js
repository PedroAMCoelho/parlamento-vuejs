import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresPDT', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresPDT', id);
  },

  listar: () => {
		return http.get('partidos/36786/membros')
  },
    
	apagar: (id) => {
		return http.delete('parlamentaresPDT', { data: id })
	}
}