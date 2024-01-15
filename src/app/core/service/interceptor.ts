const MSG_SESSION_EXPIRED = 'Sessão expirada';
const MSG_PERMISSION_ERROR = 'Você não tem permissão para realizar essa ação';
const MSG_ERROR_NOT_FOUND = 'Não encontramos o caminho solicitado';
const MSG_COMMUNICATION_ERROR = 'Falha na comunicação entre dois ou mais servidores';
const MSG_ERROR_SERVER = 'Erro ao consultar servidor';
const MSG_DEFAULT_ERROR = 'Um problema inesperado ocorreu, tente novamente.';

export const interceptor = (error: any) => {
  console.info({ error });

  const status = error.status;
  let title =  'Erro!';
  let message = 'Algo deu errado';

  switch (status) {
    case 401:
      message = MSG_SESSION_EXPIRED;
      break;
    case 403:
      title = 'Acesso negado';
      message = MSG_PERMISSION_ERROR;
      break;
    case 404:
      message = MSG_ERROR_NOT_FOUND;
      break;
    case 500:
      title = MSG_ERROR_SERVER;
      break;
    case 502:
      message = MSG_COMMUNICATION_ERROR;
      break;
    default:
      message = error.message || MSG_DEFAULT_ERROR;
  }

  alert(`${title}\n${message}`);

};
