import os

target_path = r"c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype\backend_production\searcher.py"

with open(target_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the insertion point (before the last line or inside the app block)
# We'll insert it before `if __name__ == "__main__":`
marker = 'if __name__ == "__main__":'
insertion = """
@app.route("/debug")
def debug():
    try:
        status = {
            "num_barrels": NUM_BARRELS,
            "loaded_barrels": list(barrel_cache.keys()),
            "lexicon_size": len(lexicon_word_to_id),
            "forward_index_size": len(forward_index),
            "doc_vectors_shape": str(doc_vectors_matrix.shape) if doc_vectors_matrix is not None else "None",
            "covid_wid": lexicon_word_to_id.get("covid", -1),
            "covid_in_barrel_0": False
        }
        
        # Check if covid is in barrel 0
        covid_wid = status["covid_wid"]
        if covid_wid != -1:
            b_id = covid_wid % NUM_BARRELS
            status["covid_barrel_id"] = b_id
            if b_id == 0:
                # Force load barrel 0 if not loaded
                barrel = get_barrel(0)
                if covid_wid in barrel:
                    status["covid_in_barrel_0"] = True
                    status["covid_doc_count"] = len(barrel[covid_wid][0])
                else:
                    status["covid_in_barrel_0"] = "Not Found in Barrel Data"
        
        return jsonify(status)
    except Exception as e:
        return jsonify({"error": str(e)})

"""

if "@app.route(\"/debug\")" in content:
    print("Already patched.")
else:
    new_content = content.replace(marker, insertion + marker)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully patched searcher.py")
