using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorAnimation : MonoBehaviour
{
    private new Animator animation;
    private AudioSource openingSound;
    private int counter = 0;
    void Start()
    {
        
    }

    void OnEnable() {
        animation = this.GetComponent<Animator>();
        openingSound = this.GetComponentInChildren<AudioSource>();
        openingSound.Play();
        counter = 0;
        ClosingDoor.touchingCol = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (ClosingDoor.touchingCol == true && counter < 1) {
            Debug.Log("entro");
            animation.SetBool("isClosing", true);
            counter++;
        }
    }
}
