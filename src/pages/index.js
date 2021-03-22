import styles from '../styles/login.module.css';

export default function Login() {
  return (
    <>
      <main className={styles.main}>

        <section className={styles.left}>
          <img className={styles.mount} src="/img/montanhaBK.svg" alt="montanha" />
          <img className={styles.men} src="/img/homem.svg" alt="homem" />
          <img className={styles.ball} src="/img/bola.svg" alt="homem" />
        </section>

        <section className={styles.rigth}>
          <img className={styles.mount} src="/img/montanhaWH.svg" alt="homem" />
          <main className={styles.content}>

            <h1>Fazer Login</h1>
            <form className={styles.form}>
              <label >Email</label>
              <input type="text" />
              <label >Senha</label>
              <input type="password" />
              <button>Login</button>
            </form>
            <div className={styles.options}>
              <span>Ou</span>
              <div>
                <button className={styles.btn}>
                  <img src="/icons/f.svg" alt="" />
                </button>

                <button className={styles.btn}>
                  <img src="/icons/a.svg" alt="" />
                </button>

                <button className={styles.btn}>
                  <img src="/icons/g.svg" alt="" />
                </button>
              </div>
              <span href="#">Nao tem uma conta?</span>
              <a href="#">Cadastre-se</a>
            </div>
          </main>
        </section>
      </main>
    </>
  )
}
