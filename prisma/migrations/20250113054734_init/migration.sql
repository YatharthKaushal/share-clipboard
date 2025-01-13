-- CreateTable
CREATE TABLE "Clipboard" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clipboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clipboard_url_key" ON "Clipboard"("url");
