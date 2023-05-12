-- CreateTable
CREATE TABLE "cartoes" (
    "id" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "codigoSeguraca" TEXT NOT NULL,
    "valorLimite" TEXT NOT NULL,
    "valorAtual" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cartoes_pkey" PRIMARY KEY ("id")
);
