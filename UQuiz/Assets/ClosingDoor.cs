using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClosingDoor : MonoBehaviour
{
    public static bool touchingCol = false;

    public GameObject screen;
    public GameObject snapZone;
    public GameObject table;

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnTriggerEnter(Collider other) {
         if (other.tag == "Player") {
                Debug.Log("funsiona");
                touchingCol = true;

                Destroy (screen);
                Destroy (snapZone);
                Destroy (table);

         }
     }
}
