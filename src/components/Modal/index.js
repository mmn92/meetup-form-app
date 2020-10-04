import React from "react"
import { Modal, ModalContent, Message } from "./style"

const ModalComponent = ({ data }) => (
    <Modal>
        <ModalContent>
            {data.class === "worker" || !data.class
                ? <Message communist>Bem vindo a luta, {data.name}</Message>
                : <Message>Dados cadastrados, aguarde contato!</Message>}
        </ModalContent>
    </Modal>
)

export default ModalComponent