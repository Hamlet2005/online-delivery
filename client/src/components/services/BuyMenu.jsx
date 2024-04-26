import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import css from './Services.module.css'

const BuyMenu = ({ addedItems, setAddedItems, dishes, onDeleteItem }) => {

    const [total, setTotal] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handelClickMinus = id => {
        dishes.map(e =>
            e.id === id && setAddedItems(dish =>
                dish.map(item =>
                    item.id === id
                        ? { ...item, count: item.count - (item.count > 1 ? 1 : 0), price: e.price * (item.count > 1 ? item.count - 1 : 1) }
                        : item
                )
            )
        )
    }
    const handelClickPlus = id => {
        dishes.map(e =>
            e.id === id && setAddedItems(dish =>
                dish.map(item =>
                    item.id === id
                        ? { ...item, count: item.count + (item.count < 20 ? 1 : 0), price: e.price * (item.count < 20 ? item.count + 1 : item.count) }
                        : item
                )
            )
        )
    }

    const deleteItem = (id) => {
        const updatedItems = addedItems.filter((item) => item.id !== id);
        setAddedItems(updatedItems);
        onDeleteItem(id);
    };

    useEffect(() => {
        let a = 0
        addedItems.map(item =>
            a += item.price
        )
        setTotal(a)
    }, [addedItems])


    return (
        <article >
            {
                total > 0 ? <h2 style={{ paddingTop: "100px" }} className={css.h2}>
                   Koupit Menu
                </h2> : null
            }

            <div className={css.menuBlock}>
                {
                    addedItems.length ? <>
                        {
                            addedItems.map(dish => {
                                return (
                                    <div key={dish.id} className={css.menuBox}>
                                        <div className={css.menuInfo}>
                                            <img src={`./images/${dish.image}`} alt='' />
                                            <p>{dish.name}</p>
                                            <button className={css.deleteButton} onClick={() => deleteItem(dish.id)}>Delete</button>
                                        </div>
                                        <div className={css.quantity}>
                                            <button className={css.quantity__minus} onClick={() => handelClickMinus(dish.id)}><span>-</span></button>
                                            <span className={css.quantity__input}>{dish.count}</span>
                                            <button className={css.quantity__plus} onClick={() => handelClickPlus(dish.id)}><span>+</span></button>
                                        </div>
                                        <p>
                                        Cena {dish.price} Kč
                                        </p>
                                    </div>
                                )
                            })
                        }
                        <div className={css.buyMenu}>
                            <p className={css.total}>Celkový {total} Kč</p>
                            <button className={css.buy} onClick={() => { setOpenModal(true) }}>Kup nyní</button>
                        </div>
                    </> : null
                }
            </div>
            <Modal openModal={openModal} setOpenModal={setOpenModal} total={total} addedItems={addedItems} />
        </article>
    )
}

export default BuyMenu
