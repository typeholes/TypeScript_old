go=nope

if [[ $1 = "--go" ]] ; then
	if [ -n "$(git status --porcelain)" ] ; then
		echo "Aborting becase working directory is not clean"
		exit 1;
	fi
	go=good
fi





branch=`git rev-parse --abbrev-ref HEAD`

dir="$PWD"

tmpdir=${TMPDIR:-'/tmp'}

workdir="$tmpdir/typescript-fork-scripts"

root=`git rev-parse --show-toplevel` 

mkdir -p "$workdir"

cd "$workdir" 

(
echo "root='$root'" 
echo 'cd "$root"'
echo '('
for script in "$@"; do
	echo "#### '$script' ####"
	cat "$dir/$script"
done
echo ')'
) > "$workdir/go.sh"


chmod 755 "$workdir/go.sh"

if [[ $go = "good" ]]; then
	"$workdir/go.sh"
fi

function cleanup {
   cd "$dir"
   git switch "$branch"
}

trap cleanup EXIT



