import * as admin from 'firebase-admin';
import { MostrarDTO } from '../DTO/mostrar.dto';
import { CadastroDTO } from '../DTO/cadastro.dto';
import { AtualizarDTO } from '../DTO/atualizar.dto';

export class UsuarioRepository {
  private readonly db: FirebaseFirestore.Firestore;
  constructor() {
    this.db = admin.firestore();
  }
  private readonly collection = 'Usuario';

  async cadastro(CadUsuario: CadastroDTO): Promise<MostrarDTO> {
    const novoUsuario = await this.db
      .collection(this.collection)
      .add(CadUsuario);
    const usuario = await this.buscarPorID(novoUsuario.id);
    return usuario;
  }

  async buscarPorID(id: string): Promise<MostrarDTO> {
    const usuarioRef = this.db.collection(this.collection).doc(id);
    const snapshot = (await usuarioRef.get()).data();
    const data = await usuarioRef.get();
    if (!data.exists) {
      return;
    }

    const usuario: MostrarDTO = {
      id: data.id,
      nome: snapshot.nome,
      email: snapshot.email,
      dataNascimento: snapshot.dataNascimento,
      endereco: snapshot.endereco,
      cep: snapshot.cep,
      cidade: snapshot.cidade,
      estado: snapshot.estado,
      cpf: snapshot.cpf,
      rg: snapshot.rg,
      orgaoExpedidor: snapshot.orgaoExpedidor,
      contaBancaria: snapshot.contaBancaria,
      setor: snapshot.setor,
      telefone: snapshot.telefone,
    };

    return usuario;
  }

  async buscarPorEmail(email: string): Promise<MostrarDTO> {
    const collectionRef = this.db.collection(this.collection);
    const snapshot = await collectionRef.where('email', '==', email).get();
    if (snapshot.empty) {
      return;
    }
    const usuario: MostrarDTO = {
      id: snapshot.docs[0].id,
      nome: snapshot.docs[0].data().nome,
      email: snapshot.docs[0].data().email,
      dataNascimento: snapshot.docs[0].data().dataNascimento,
      endereco: snapshot.docs[0].data().endereco,
      cep: snapshot.docs[0].data().cep,
      cidade: snapshot.docs[0].data().cidade,
      estado: snapshot.docs[0].data().estado,
      cpf: snapshot.docs[0].data().cpf,
      rg: snapshot.docs[0].data().rg,
      orgaoExpedidor: snapshot.docs[0].data().orgaoExpedidor,
      contaBancaria: snapshot.docs[0].data().contaBancaria,
      setor: snapshot.docs[0].data().setor,
      telefone: snapshot.docs[0].data().telefone,
    };

    return usuario;
  }

  async buscarPorSetor(setor: string): Promise<MostrarDTO[]> {
    const collectionRef = this.db.collection(this.collection);
    const snapshot = await collectionRef.where('setor', '==', setor).get();
    if (snapshot.empty) {
      return;
    }

    const usuarios: MostrarDTO[] = [];

    snapshot.forEach(() => {
      const usuario: MostrarDTO = {
        id: snapshot.docs[0].id,
        nome: snapshot.docs[0].data().nome,
        email: snapshot.docs[0].data().email,
        dataNascimento: snapshot.docs[0].data().dataNascimento,
        endereco: snapshot.docs[0].data().endereco,
        cep: snapshot.docs[0].data().cep,
        cidade: snapshot.docs[0].data().cidade,
        estado: snapshot.docs[0].data().estado,
        cpf: snapshot.docs[0].data().cpf,
        rg: snapshot.docs[0].data().rg,
        orgaoExpedidor: snapshot.docs[0].data().orgaoExpedidor,
        contaBancaria: snapshot.docs[0].data().contaBancaria,
        setor: snapshot.docs[0].data().setor,
        telefone: snapshot.docs[0].data().telefone,
      };

      usuarios.push(usuario);
    });

    return usuarios;
  }

  async atualizarDados(
    id: string,
    novosDados: AtualizarDTO,
  ): Promise<MostrarDTO> {
    const usuarioRef = this.db.collection(this.collection).doc(id);
    await usuarioRef.update({ ...novosDados });
    return await this.buscarPorID(id);
  }

  async atualizarSetor(id: string, setorNovo: string): Promise<MostrarDTO> {
    const usuarioRef = this.db.collection(this.collection).doc(id);
    await usuarioRef.update({ setor: setorNovo });
    return await this.buscarPorID(id);
  }

  async remover(id: string) {
    return await this.db.collection(this.collection).doc(id).delete();
  }
}
