echo "Escreva aqui o caminho $caminho"
read caminho

	if [ -f $caminho ]
	then
		echo "O caminho $caminho é um arquivo"
	elif [ -d $caminho ]
	then
		echo "O camimho $caminho é um diretório"
	else
		echo "O caminho $caminho é outro tipo de arquivo"
	fi

	ls -a $caminho