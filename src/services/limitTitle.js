export function limitTitle(title) {
	/* Define um limite via variavel, por boas práticas */
	const limit = 30;
	/* Aplicar mudanças só se for maior que o limite */
	if(title.length > limit){
  	title = title.substring(0,limit);
		return `${title}...`;
  }
	/* Retorna normalmente sem os "..." caso seja maior que o limitador */
  return title;
}