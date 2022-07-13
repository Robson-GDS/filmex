export function limitTitle(title) {

	const limit = 30;

	if(title.length > limit){
  	title = title.substring(0,limit);
		return `${title}...`;
  }

  return title;
}