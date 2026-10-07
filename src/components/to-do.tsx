const todo = [
  '[x] - Definir os idiomas disponíveis',
  '[ ] - Adicionar traduções',
  '[ ] - Criar um seletor de idioma',
  '[ ] - Salvar a preferência no cookie',
  '[ ] - Restaurar o idioma escolhido ao voltar ao site',
  '[x] - Criar a investigação inspirada em Danganronpa',
  '[x] - Exibir respostas com mensagens no estilo visual novel',
  '[ ] - Definir um botão para ativar o modo de investigação',
  '[ ] - Mudar o cursor sobre áreas investigáveis enquanto o botão estiver pressionado',
  '[ ] - Criar um formulário com nome e mensagem',
  '[ ] - Criar a tabela dos comentários no drizzle',
  '[ ] - Criar as rotas para enviar e consultar comentários',
  '[ ] - Conectar o formulário ao backend',
  '[ ] - Exibir as mensagens de quem passou pelo site',
  '[ ] - Adicionar validação dos campos',
  '[ ] - Adicionar alguma proteção básica contra spam nos comentários'
]

export function Todo() {
  return (
    <div
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden p-6 select-none'
      aria-hidden
    >
      <ul className='flex max-w-100 flex-col gap-1.5 font-mono text-xs leading-5 text-neutral-600'>
        {todo.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
