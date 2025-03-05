#!/bin/bash 

FILE="superhero.json"
COUNT=0
HEROES=()

# Populate the Heroes array
###############################
COUNT=0
while [ $COUNT -lt $HEROES_LENGTH ]
do
  NAME=$(cat $FILE | jq ".members[$COUNT].name")
  HEROES+=("$NAME")
  ((COUNT++))
done

# Show a select menu for Heroes
##################################
PS3="Which hero do you want to know? "
select option in "${HEROES[@]}" Exit
do
  if [ "$option" == "Exit" ]
  then
    break
  fi

  # The read line is saved in the REPLY variable.
  INDEX=$(($REPLY - 1)) # index is 0-based while select menu starts at 1
  MEMBER=$(jq ".members[$INDEX]" $FILE)
  SECRET_IDENTITY=$(jq ".members[$INDEX].secretIdentity" $FILE)
  POWERS=$(jq ".members[$INDEX].powers[]" $FILE)

  echo -e "\nThe secret identity of ${option} is ${SECRET_IDENTITY}. Powers are:"
  echo -e "\n$POWERS\n"
done
echo 'Exiting.. '

