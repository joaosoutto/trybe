#!/bin/bash

caminho=/home/soutto/trybe/1_5_ShellScript/ex4.sh

	if [ -e $caminho ]
	then
		echo "O caminho $caminho está habilitado!!"
	else
		echo "O caminho $caminho não está habilitado!!"
	fi

	if [ -w $caminho ]
	then
		echo "Você tem permissão para editar $caminho"
	else
		echo "Você NÃO foi aturizado a editar $caminho"
